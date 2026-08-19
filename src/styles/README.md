# CSS ownership contract

The global stylesheet is import-only. Each selector has one owner:

- `tokens.css`: design tokens only
- `base.css`: reset, paper shell, common controls, reveal utility
- `layout.css`: header, navigation, contact bar, identity banner, footer
- `profile.css`: profile page sections and their responsive states
- `projects.css`: project case-study page and its responsive states

Responsive behavior is colocated with the component owner. Do not add a second override file at the end of the cascade. Extend the owning module and run:

```bash
npm run check:css
```

The checker rejects an exact selector declared more than once in the same media scope or owned by multiple style modules.
