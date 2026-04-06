---
name: seed-physics
version: 0.1.0
description: >-
  How to frame seed-driven physics, causality, and deterministic replay across simulation scales.
---

# Seeded Universe Recreation Engine / seed-physics

Use this skill when working inside the **Seeded Universe Recreation Engine** portion of the ARC ecosystem.

## Goal

How to frame seed-driven physics, causality, and deterministic replay across simulation scales.

## Operating rules

- Keep deterministic state and authority boundaries explicit.
- Avoid hidden mutable state or competing controllers.
- Prefer receipt-backed actions and replayable transitions.
- Surface violations rather than silently swallowing failures.
- Treat UI and visualization as derived from engine truth.

## Recommended workflow

1. Establish the current authority layer.
2. Identify the canonical source of state.
3. Define the intended transition or operator request.
4. Log the action in a receipt-friendly format.
5. Verify resulting state against the expected invariant.
