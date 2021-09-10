import { createStore } from 'effector';
import { Search } from '../../types/entities';

export const $searchId = createStore<Search | null>(null)