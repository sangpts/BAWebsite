"use client";

import { useEffect, useRef } from "react";

type Neuron = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	radius: number;
	phase: number;
};

const CONNECTION_DISTANCE = 178;
const MOTION_MULTIPLIER = 3;

export function NeuralBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const context = canvas.getContext("2d");
		if (!context) return;

		const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
		let neurons: Neuron[] = [];
		let frameId = 0;
		let width = 0;
		let height = 0;
		let visible = true;
		let reducedMotion = motionPreference.matches;

		const createNeurons = () => {
			const count = Math.min(40, Math.max(24, Math.round((width * height) / 19500)));
			neurons = Array.from({ length: count }, (_, index) => ({
				x: ((index * 37) % 101) / 100 * width,
				y: ((index * 61 + 17) % 103) / 102 * height,
				vx: (Math.random() - 0.5) * 0.095 * MOTION_MULTIPLIER,
				vy: (Math.random() - 0.5) * 0.075 * MOTION_MULTIPLIER,
				radius: 1.7 + Math.random() * 1.5,
				phase: Math.random() * Math.PI * 2,
			}));
		};

		const resize = () => {
			const bounds = canvas.getBoundingClientRect();
			width = Math.max(1, bounds.width);
			height = Math.max(1, bounds.height);
			const scale = Math.min(window.devicePixelRatio || 1, 1.5);

			canvas.width = Math.round(width * scale);
			canvas.height = Math.round(height * scale);
			context.setTransform(scale, 0, 0, scale, 0, 0);
			createNeurons();
			draw(performance.now(), false);
		};

		const draw = (time: number, update: boolean) => {
			context.clearRect(0, 0, width, height);

			if (update) {
				for (const neuron of neurons) {
					neuron.x += neuron.vx;
					neuron.y += neuron.vy;

					if (neuron.x < -12 || neuron.x > width + 12) neuron.vx *= -1;
					if (neuron.y < -12 || neuron.y > height + 12) neuron.vy *= -1;
				}
			}

			context.lineWidth = 1.1;
			for (let first = 0; first < neurons.length; first += 1) {
				for (let second = first + 1; second < neurons.length; second += 1) {
					const start = neurons[first];
					const end = neurons[second];
					const xDistance = start.x - end.x;
					const yDistance = start.y - end.y;
					const distance = Math.hypot(xDistance, yDistance);

					if (distance >= CONNECTION_DISTANCE) continue;

					const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.42;
					context.strokeStyle = `rgba(23, 59, 112, ${opacity})`;
					context.beginPath();
					context.moveTo(start.x, start.y);
					context.lineTo(end.x, end.y);
					context.stroke();
				}
			}

			for (const neuron of neurons) {
				const pulse = reducedMotion ? 0.84 : 0.76 + Math.sin(time * 0.00375 + neuron.phase) * 0.2;
				const glow = context.createRadialGradient(neuron.x, neuron.y, 0, neuron.x, neuron.y, neuron.radius * 4.5);
				glow.addColorStop(0, `rgba(23, 59, 112, ${pulse * 0.72})`);
				glow.addColorStop(0.32, `rgba(38, 82, 143, ${pulse * 0.38})`);
				glow.addColorStop(0.68, `rgba(65, 108, 166, ${pulse * 0.14})`);
				glow.addColorStop(1, "rgba(23, 59, 112, 0)");
				context.fillStyle = glow;
				context.beginPath();
				context.arc(neuron.x, neuron.y, neuron.radius * 4.5, 0, Math.PI * 2);
				context.fill();

				context.shadowColor = `rgba(23, 59, 112, ${pulse * 0.42})`;
				context.shadowBlur = 4;
				context.fillStyle = `rgba(23, 59, 112, ${Math.min(0.94, pulse)})`;
				context.beginPath();
				context.arc(neuron.x, neuron.y, neuron.radius, 0, Math.PI * 2);
				context.fill();
				context.shadowBlur = 0;
			}
		};

		const animate = (time: number) => {
			frameId = 0;
			if (!visible || reducedMotion) return;
			draw(time, true);
			frameId = window.requestAnimationFrame(animate);
		};

		const startAnimation = () => {
			if (!frameId && visible && !reducedMotion) {
				frameId = window.requestAnimationFrame(animate);
			}
		};

		const visibilityObserver = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			if (!visible && frameId) {
				window.cancelAnimationFrame(frameId);
				frameId = 0;
			}
			startAnimation();
		});

		const resizeObserver = new ResizeObserver(resize);
		const handleMotionPreference = (event: MediaQueryListEvent) => {
			reducedMotion = event.matches;
			if (reducedMotion && frameId) {
				window.cancelAnimationFrame(frameId);
				frameId = 0;
				draw(performance.now(), false);
			} else {
				startAnimation();
			}
		};

		resizeObserver.observe(canvas);
		visibilityObserver.observe(canvas);
		motionPreference.addEventListener("change", handleMotionPreference);

		return () => {
			if (frameId) window.cancelAnimationFrame(frameId);
			resizeObserver.disconnect();
			visibilityObserver.disconnect();
			motionPreference.removeEventListener("change", handleMotionPreference);
		};
	}, []);

	return <canvas className="ai-capability__neural-background" ref={canvasRef} aria-hidden="true" />;
}
