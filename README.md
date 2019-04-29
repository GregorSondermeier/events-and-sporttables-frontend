# Events and Sporttables Frontend

This is a prototype client for the Leo Media Database to browse events and sport tables.
* It is written in [Angular 7.2](https://angular.io/).
* For styling, a custom version of [Bootstrap 4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/) is used. See [_bootstrap-custom.scss](src/scss/partials/_bootstrap-custom.scss) for the list of bootstrap components included in this project.
* For some of the interactive components, [ng-bootstrap 4.0](https://ng-bootstrap.github.io/) is being used. Again, not the whole deal but only the modules needed. See the several *.module.ts Module definitions under [src/app](src/app).

**Table of Contents**

- [Events Module](#events-module)
  * [Data Types](#data-types)
  * [Mocked API Endpoints](#mocked-api-endpoints)
    + [$list(params?: IEventsListParams): IEventPreview[]](#--list-params---ieventslistparams---ieventpreview---)
    + [$get(eventId?: number|string): IEvent[]](#--get-eventid---number-string---ievent---)
    + [categories.$list(params?: ICategoriesListParams): ICategory[]](#-categories-list-params---icategorieslistparams---icategory---)
    + [locations.$list(params?: ILocationsListParams): ILocation[]](#-locations-list-params---ilocationslistparams---ilocation---)
- [Sports Module](#sports-module)
  * [Data Types](#data-types-1)
  * [Mocked API Endpints](#mocked-api-endpints)
    + [sports.$list(params?: ISportsListParams): ISports[]](#-sports-list-params---isportslistparams---isports---)
    + [teams.$list(params?: ITeamsSearchParams): ITeamPreview[]](#-teams-list-params---iteamssearchparams---iteampreview---)
    + [teams.$get(teamId: number | string): ITeam](#-teams-get-teamid--number---string---iteam-)
    + [leagues.$list(params: ILeagueListParams): ILeague[]](#-leagues-list-params--ileaguelistparams---ileague---)
    + [results.$get(params: IResultsGetParams): IResult](#-results-get-params--iresultsgetparams---iresult-)
- [How to develop locally](#how-to-develop-locally)
  * [Install dependencies](#install-dependencies)
  * [Development server](#development-server)
  * [Code scaffolding](#code-scaffolding)
  * [Build](#build)
  * [Running unit tests](#running-unit-tests)
  * [Running end-to-end tests](#running-end-to-end-tests)
  * [Further help](#further-help)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

---- 

## Events Module

### Data Types

Below is a list of interfaces and classes used by this module.

* [ICategory](src/app/events/_interfaces/ICategory.ts) / [Category](src/app/events/_models/Category.ts)
* [ILocation](src/app/events/_interfaces/ILocation.ts) / [Location](src/app/events/_models/Location.ts)
* [IEventPreview](src/app/events/_interfaces/IEventPreview.ts) / [EventPreview](src/app/events/_models/EventPreview.ts)
* [IEvent](src/app/events/_interfaces/IEvent.ts) / [Event](src/app/events/_models/Event.ts)


### Mocked API Endpoints

The API Endpoints are mocked by JSON files in [src/assets/mocks/events](src/assets/mocks/events). The [events-api.service.ts](src/app/events/events-api.service.ts) calls these API endpoints and returns Observables of a certain type. Currently the following API endpoints are mocked:

#### `$list(params?: IEventsListParams): IEventPreview[]`

Retreives a list of [IEventPreview](src/app/events/_interfaces/IEventPreview.ts)s as specified by the search parameters.

##### Params:
```
interface IEventsListParams {
  query?: string,
  date?: string,
  category?: number | string,
  location?: number | string,
  pageSize?: number
}
```

If `params.category` is `-1`, the Highlights are being requested as I suppose there is no category called _Highlights_.

#### `$get(eventId?: number|string): IEvent[]`

Retreives an [IEvent](src/app/events/_interfaces/IEvent.ts) of a specific ID.

#### `categories.$list(params?: ICategoriesListParams): ICategory[]`

Retreives a list of [ICategory](src/app/events/_interfaces/ICategory.ts)s.

##### Params:
```
interface ICategoriesListParams {
  query?: string
}
```

If no `query` is given, all [ICategory](src/app/events/_interfaces/ICategory.ts)s should be returned.

#### `locations.$list(params?: ILocationsListParams): ILocation[]`

Retreives a list of [ILocation](src/app/events/_interfaces/ILocation.ts)s.

##### Params:
```
interface ILocationsListParams {
  query?: string
}
```

If no `query` is given, all [ILocation](src/app/events/_interfaces/ILocation.ts)s should be returned.

----

## Sports Module

### Data Types

Below is a list of interfaces and classes used by this module.

* [ISports](src/app/sport/_interfaces/ISports.ts) / [Sports](src/app/sport/_models/Sports.ts)
* [ILeague](src/app/sport/_interfaces/ILeague.ts) / [Leage](src/app/sport/_models/League.ts)
* [IResults](src/app/sport/_interfaces/IResults.ts) / [Results](src/app/sport/_models/Results.ts)
* [ITeamPreview](src/app/sport/_interfaces/ITeamPreview.ts) / [TeamPreview](src/app/sport/_models/TeamPreview.ts)
* [ITeam](src/app/sport/_interfaces/ITeam.ts) / [Team](src/app/sport/_models/Team.ts)

### Mocked API Endpints

The API Endpoints are mocked by JSON files in [src/assets/mocks/sport](src/assets/mocks/sport). The [sport-api.service.ts](src/app/sport/sport-api.service.ts) calls these API endpoints and returns Observables of a certain type. Currently the following API endpoints are mocked:

#### `sports.$list(params?: ISportsListParams): ISports[]`

Retreives a list of [ISports](src/app/sport/_interfaces/ISports.ts) as specified by the search parameters.

##### Params:
```
interface ISportsListParams {
  query?: string
}
```

If no `query` is given, all [ISports](src/app/sport/_interfaces/ISports.ts) should be returned.

#### `teams.$list(params?: ITeamsSearchParams): ITeamPreview[]`

Retreives a list of [ITeamPreview](src/app/sport/_interfaces/ITeamPreview.ts)s as specified by the search parameters.

##### Params:
```
interface ITeamsSearchParams {
  query?: string,
  pageSize?: number
}
```

If no `query` is given, all [ITeamPreview](src/app/sport/_interfaces/ITeamPreview.ts)s should be returned.

#### `teams.$get(teamId: number | string): ITeam`

Retreives a [ITeam](src/app/sport/_interfaces/ITeam.ts) of a specific ID.

#### `leagues.$list(params: ILeagueListParams): ILeague[]`

Retreives the list of [ILeague](src/app/sport/_interfaces/ILeague.ts)s of a specific sport.

##### Params:
```
interface ILeagueListParams {
  sport: number
}
```

#### `results.$get(params: IResultsGetParams): IResult`

Retreives the [IResults](src/app/sport/_interfaces/IResults.ts) of a specific sport, league, season, matchday.

##### Params:
```
interface IResultsGetParams {
  sport: number,
  league: number,
  season: number,
  matchday: number
}
```

----

## How to develop locally

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

### Install dependencies

After cloning the project for the first time, run `npm install` to install all dependencies. See the [package.json](package.json) for the list of dependencies.

### Development server

Run `npm run ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `npm run ng generate component component-name` to generate a new component. You can also use `npm run ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `npm run ng build` to build the project. The build artifacts will be stored in the `dist/` directory.  
Use `npm run ng build -- --prod` for a production build.  
Use `npm run ng build -- --prod --output-hashing none` for a production build without hash values in the generated file names.

### Running unit tests

Run `npm run ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `npm run ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
