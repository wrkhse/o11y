# AGENTS.md

o11y is the common envelope for spans, logs, metrics and hash-chained
evidence across wrkhse modules. The plan and its planned slices are in
[wrkhse/o11y#1](https://github.com/wrkhse/o11y/issues/1). This repository
holds the SDK; the collector, store, readers and waterfall live in barn.

## Vocabulary

Say **evidence** for the hash-chained append-only record and **span**, **log**
or **metric** for best-effort telemetry.

## Layout

- `crates/o11y` — the Rust SDK and the CLI
- `packages/o11y` — the `@wrkhse/o11y` TypeScript package
- `schema` — the envelope's JSON Schema
- `tests/vectors` — fixtures shared by both languages

## Build and gate

Rust 1.100, edition 2024, `unsafe_code = "forbid"`, clippy pedantic with
warnings denied. The toolchain is pinned in `rust-toolchain.toml`. Every job
runs in CI, one job each, in `.github/workflows/check.yml`: `fmt`,
`clippy`, `test`, `msrv`, `deny`, `mutants`, `docs` and `ts`.
Never weaken a gate to make a change pass.

Mutation runs and tests that touch processes execute in CI only, never on
the owner's Mac. The host runs static checks: `git diff --check` and a
Markdown line-length check.

## Branches

`main` is green. Every change after the first commit comes through a pull
request. A release tag and publish need the owner's approval.
