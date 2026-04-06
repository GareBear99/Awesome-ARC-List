---
name: embodiment-boundary
version: 0.1.0
description: >-
  Rules for keeping Synth as visualization only while ARC retains authority.
---

# Synth Shell / embodiment-boundary

Use this skill when working inside the **Synth Shell** portion of the ARC ecosystem.

## Goal

Rules for keeping Synth as visualization only while ARC retains authority.

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
