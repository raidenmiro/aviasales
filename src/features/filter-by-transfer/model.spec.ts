import { allSettled, fork } from 'effector';
import { filtersType } from './lib';
import { $filterItems, $isEverySelectedFilters, filterSelected } from './model';

describe('filters', () => {
  describe('activation', () => {
    it('check active all filters', () => {
      const scope = fork();

      for (const filter of scope.getState($filterItems)) {
        expect(filter.active).toBeTruthy();
      }
    });

    it('when clicking on the active filter, except "all" to disable it', async () => {
      const scope = fork();

      for (const filter of scope.getState($filterItems)) {
        expect(filter.active).toBeTruthy();
      }

      await allSettled(filterSelected, {
        params: filtersType.ONE_TRANSPLANT,
        scope,
      });

      for (const filter of scope.getState($filterItems)) {
        if (filter.id === filtersType.ONE_TRANSPLANT) {
          expect(filter.active).toBeFalsy();
        }
      }
    });

    it('when clicked on the active filter "all", disable others filters', async () => {
      const scope = fork();

      for (const filter of scope.getState($filterItems)) {
        if (filter.id === filtersType.ALL_TRANSFERS) {
          expect(filter.active).toBeTruthy();
        }
      }

      await allSettled(filterSelected, {
        params: filtersType.ALL_TRANSFERS,
        scope,
      });

      for (const filter of scope.getState($filterItems)) {
        expect(filter.active).toBeFalsy();
      }
    });

    it('if any filter is inactive, disabled filter "all"', async () => {
      const scope = fork();

      for (const filter of scope.getState($filterItems)) {
        expect(filter.active).toBeTruthy();
      }

      await allSettled(filterSelected, {
        params: filtersType.THREE_TRANSPLANT,
        scope,
      });

      for (const filter of scope.getState($filterItems)) {
        if (filter.id === filtersType.ALL_TRANSFERS) {
          expect(filter.active).toBeFalsy();
        }
      }

      expect($isEverySelectedFilters).toBeTruthy();
    });

    it('if all filters are active except "all", then turn it on', async () => {
      const mockFilters = [
        {
          id: filtersType.ALL_TRANSFERS,
          title: 'Все',
          active: false,
          stop: -1,
        },
        {
          id: filtersType.NO_TRANSFERS,
          title: 'Без пересадок',
          active: true,
          stop: 0,
        },
        {
          id: filtersType.ONE_TRANSPLANT,
          title: '1 пересадка',
          active: true,
          stop: 1,
        },
        {
          id: filtersType.TWO_TRANSPLANT,
          title: '2 пересадки',
          active: true,
          stop: 2,
        },
        {
          id: filtersType.THREE_TRANSPLANT,
          title: '3 пересадки',
          active: true,
          stop: 3,
        },
      ];

      const scope = fork({
        values: new Map().set($filterItems, mockFilters),
      });

      for (const filter of scope.getState($filterItems)) {
        if (filter.id === filtersType.ALL_TRANSFERS) {
          expect(filter.active).toBeTruthy();
        }
      }
    });

    it('if disable the filter "all", then everyone will be turned off', async () => {
      const scope = fork();

      for (const filter of scope.getState($filterItems)) {
        expect(filter.active).toBeTruthy();
      }

      await allSettled(filterSelected, {
        params: filtersType.ALL_TRANSFERS,
        scope,
      });

      for (const filter of scope.getState($filterItems)) {
        expect(filter.active).toBeFalsy();
      }
    });

    it('if you turn on the filter "all", all will be activated', async () => {
      const mockFilters = [
        {
          id: filtersType.ALL_TRANSFERS,
          title: 'Все',
          active: false,
          stop: -1,
        },
        {
          id: filtersType.NO_TRANSFERS,
          title: 'Без пересадок',
          active: true,
          stop: 0,
        },
        {
          id: filtersType.ONE_TRANSPLANT,
          title: '1 пересадка',
          active: false,
          stop: 1,
        },
        {
          id: filtersType.TWO_TRANSPLANT,
          title: '2 пересадки',
          active: true,
          stop: 2,
        },
        {
          id: filtersType.THREE_TRANSPLANT,
          title: '3 пересадки',
          active: false,
          stop: 3,
        },
      ];

      const scope = fork({
        values: new Map().set($filterItems, mockFilters),
      });

      await allSettled(filterSelected, {
        params: filtersType.ALL_TRANSFERS,
        scope,
      });

      for (const filter of scope.getState($filterItems)) {
        expect(filter.active).toBeTruthy();
      }
    });
  });

  describe('events filters', () => {
    it.todo('filtering tickets by 1,2 transfers');
    it.todo('filtering tickets by all');
    it.todo('filtering without transplants');
  });
});
