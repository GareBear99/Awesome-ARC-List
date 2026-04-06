---
name: seeded-runtime
version: 0.1.0
description: >-
  Guidance for seed-rooted state reconstruction using event spines and reusable task graphs.
---

# ARC Turbo OS / seeded-runtime

Use this skill when working inside the **ARC Turbo OS** portion of the ARC ecosystem.

## Goal

Guidance for seed-rooted state reconstruction using event spines and reusable task graphs.

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
