# IsItKitchenSafe Repository Rules & Autonomous Engine Protocols

## Autonomous Engineering & Git Protocol
1. **Mandatory Automatic Remote Push:**
   - Whenever an hourly growth wave, tool elevation, content addition, or operational task is completed and verified, you **MUST** automatically push changes to the remote repository:
     ```bash
     git push origin main
     ```
   - **Never** leave the local branch ahead of `origin/main` or wait for the user to ask for a push. A task is **NOT DONE** until it has been pushed cleanly to `origin/main`.

2. **Strict Definition of Done (WIP = 1 & Zero Defects):**
   - A task or growth wave is strictly complete only when:
     1. The content, spec, or component is fully written and localized across all 5 languages (`en`, `es`, `pt`, `zh-cn`, `ja`) with 100% slug parity.
     2. `npm run build` compiles all 12,000+ pages with **0 errors**.
     3. Link integrity audit confirms **0 broken links**.
     4. Atomic git commit is created cleanly.
     5. Changes are pushed to GitHub (`git push origin main`).
     6. `daily-ops-growth-report.md`, `logs/autonomous-growth-history.json`, and roadmap files are updated.

3. **Zero Dangling or Broken State:**
   - If a build or link audit fails, fix the issue immediately or restore the tree. Never push broken code to `origin/main`.
