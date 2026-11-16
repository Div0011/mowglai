# Contributing to this project

Thank you for your interest in contributing! This document provides guidelines
and steps for contributing.

## 🚀 Getting Started

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create a branch** from `main`: `git checkout -b feat/your-feature`
4. **Make your changes** and commit using [Conventional Commits](https://www.conventionalcommits.org/)
5. **Push** to your fork and open a **Pull Request**

## 📝 Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types:
| Type | Description |
|------|-------------|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation only changes |
| `style` | Formatting, missing semi-colons, etc. |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |
| `ci` | CI/CD changes |
| `revert` | Reverts a previous commit |

### Examples:
```
feat(auth): add OAuth2 login flow
fix(api): handle null response from upstream
docs: update installation instructions
chore(deps): bump express from 4.18 to 4.19
```

## 🔀 Branch Naming

```
feat/short-description     # New features
fix/issue-number            # Bug fixes
docs/what-changed           # Documentation
refactor/component-name     # Refactoring
test/what-is-tested         # Test additions
chore/task-description      # Maintenance
```

## 🧪 Testing

- Write tests for all new features and bug fixes
- Ensure all existing tests pass before submitting a PR
- Run `npm test` (or framework-specific command) locally

## 📐 Code Style

- Follow the existing code style in the project
- Use the provided ESLint/Prettier configuration
- Keep functions small and focused
- Add JSDoc/TSDoc comments for public APIs

## 🔍 Pull Request Process

1. Ensure your PR description clearly describes the problem and solution
2. Reference any related issues
3. Update documentation if needed
4. Ensure CI passes
5. Request review from at least one maintainer

## 📜 Code of Conduct

Please be respectful and constructive in all interactions.
We follow the [Contributor Covenant](https://www.contributor-covenant.org/).

## 📄 License

By contributing, you agree that your contributions will be licensed
under the same license as the project.
