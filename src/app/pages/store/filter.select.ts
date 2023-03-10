import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FilterState } from "src/app/Model/filter.interface";

const selectFilter = createFeatureSelector<FilterState>('filter');


export const filter = createSelector(
    selectFilter,
    (state: FilterState) => state.validateFilter
);