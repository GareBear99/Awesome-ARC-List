---
name: timeline-replay
version: 0.1.0
description: >-
  Guidance for reconstructing world state from seed plus event lineage instead of hidden mutable state.
---

# Seeded Universe Recreation Engine / timeline-replay

Use this skill when working inside the **Seeded Universe Recreation Engine** portion of the ARC ecosystem.

## Goal

Guidance for reconstructing world state from seed plus event lineage instead of hidden mutable state.

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
