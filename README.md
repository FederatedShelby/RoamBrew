# RoamBrew

Web application to find nearby cafés and possible attractions elegantly

<!-- TODO: remove "Current status" in production -->
## Current Status

The application is in its initial stages, with a basic home page displaying the text "Home" as the landing page upon render. Further development requires incremental updates to documentation and research into NextJS, as it is the framework upon which this is built.

Development should place highest priority on clarity of purpose and code quality, clearly expressed in readable documentation as deemed appropriate.

### Key Technologies
- **Framework**: Next.js with the App Router for modern server-side rendering (SSR) and React Server Components (RSCs).
- **Language**: TypeScript for type safety and maintainable code.
- **Testing**: Jest integrated with TypeScript support and pre-commit hooks to enforce test quality.
- **Styling**: Prettier for consistent code formatting.
- **Package Management**: pnpm for efficient and fast dependency management.
- **Linting**: ESLint with the Next.js strict ruleset to catch code errors early.

## Versioning Information

This section tracks the versions of key dependencies used in the project to help identify and resolve compatibility issues as dependencies are updated.

### Key Dependencies
| Dependency                | Version   | Notes                                      |
|---------------------------|-----------|--------------------------------------------|
| **Next.js**               | ^15.0.3   | Requires strict use of the App Router; incompatible with `pages` directory. |
| **React**                 | ^19.0.0   | Compatible with latest React Server Components. |
| **React DOM**             | ^19.0.0   | Pair with React version to avoid mismatches. |
| **TypeScript**            | Transitive (via `ts-jest`, `ts-node`) | Used only for development and testing purposes. |
| **Jest**                  | ^29.7.0   | Requires `jest-environment-jsdom` for React testing. |
| **ESLint**                | ^9        | Configured with `eslint-config-next` for strict rules. |
| **Prettier**              | ^3.4.2    | Ensures consistent code formatting.        |

### Dev Dependencies
| Dependency                | Version   | Notes                                      |
|---------------------------|-----------|--------------------------------------------|
| **@types/node**           | 22.10.1   | Type definitions for Node.js.              |
| **@types/react**          | 18.3.13   | Type definitions for React.                |
| **@types/jest**           | 29.5.14   | Type definitions for Jest.                 |
| **ts-jest**               | ^29.2.5   | Integrates Jest with TypeScript.           |
| **@commitlint/cli**       | ^19.6.0   | Enforces commit message standards.         |
| **@testing-library/react**| ^16.1.0   | Simplifies React component testing.        |
| **@testing-library/jest-dom** | ^6.6.3 | Provides custom matchers for Jest.         |

### Notes on Versioning
- **TypeScript**: Not explicitly listed as a dependency. Installed transitively via `ts-jest` and `ts-node`.
- **Future Updates**: Before upgrading any dependencies, ensure backward compatibility with the current setup.
- **Known Issues**:
  - Upgrading React or Next.js may introduce breaking changes related to React Server Components or App Router.

### Commitlint Configuration

This project uses Commitlint with the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard. The configuration is stored in the `commitlint.config.js` file and uses the CommonJS module format.

#### How to Test Commit Messages

You can manually test commit messages using:

```bash
echo "feat: your commit message" | pnpm commitlint
```
