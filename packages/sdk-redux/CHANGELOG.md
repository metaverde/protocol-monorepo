# Changelog
All notable changes to the SDK-redux will be documented in this file.

## [0.2.0] - 2022-02-01
### Added
- Introduce new Redux slice `sfSubgraph` ([#571])
- Support improved querying functionality
  - Query all the Subgraph entities with all the possible filters and ordering capabilities

## [0.1.0] - 2021-12-01
### Added
- Initial preview version of SDK-Redux
- Features:
  - Wrap SDK-Core with Redux's RTK-Query to enable cache'ing of queries
    - Auto-generate React Hooks
    - Tracking loading state in order to show UI spinners
    - Tracking broadcasted transactions for UI notifications and data updates
    - Managing cache lifetimes
    - Avoiding duplicate requests for the same data
    - Monitoring blockchain events for data updates (including re-orgs)
    - Handle errors and offer user opportunity to retry


[0.2.0]: https://github.com/superfluid-finance/protocol-monorepo/compare/sdk-redux%40v0.1.0...sdk-redux%40v0.2.0
[0.1.0]: https://github.com/superfluid-finance/protocol-monorepo/releases/tag/sdk-redux%40v0.1.0


[#571]: https://github.com/superfluid-finance/protocol-monorepo/pull/571
