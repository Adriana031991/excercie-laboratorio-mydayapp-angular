import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FilterState } from "./filter.reducer";

const selectFilter = createFeatureSelector<FilterState>('filter');


export const filterData = createSelector(
    selectFilter,
    (state: FilterState) => state.validateFilter
);