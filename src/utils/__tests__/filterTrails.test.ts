import filterTrails from '../filterTrails';
import {
    mockTrails,
    mockTrail1,
    largeGroupSize,
    easyDifficulty,
    moderateDifficulty,
  } from '../__mocks__/fixtures/trailFixtures';
  
  describe('filterTrails', () => {
    it('should filter trails based on elevation gain', () => {
      const result = filterTrails(mockTrails, undefined, [400, 900], false, undefined);
      expect(result).toEqual([mockTrail1]); // Use the fixture mockTrail1
    });
  
    it('should return all trails if no filters are applied', () => {
      const result = filterTrails(mockTrails, undefined, [0, 1000], false, undefined);
      expect(result).toEqual(mockTrails);
    });
  
    it('should filter trails based on group size', () => {
      const result = filterTrails(mockTrails, undefined, [0, 1000], true, largeGroupSize);
      expect(result).toEqual([mockTrail1]); // Filtered based on large group size
    });
  
    it('should filter trails based on difficulty level', () => {
      const result = filterTrails(mockTrails, moderateDifficulty, [0, 1000], false, undefined);
      expect(result).toEqual([mockTrail1]);
    });
  
    it('should filter groomed trails', () => {
      const result = filterTrails(mockTrails, undefined, [0, 1000], true, undefined);
      expect(result).toEqual([mockTrail1]);
    });
  
    it('should return trails with lifts that match elevation gain within range', () => {
      const result = filterTrails(mockTrails, easyDifficulty, [400, 600], false, undefined);
      expect(result).not.toEqual([mockTrail1]);
    });
  
    it('should return empty if no trail matches the filters', () => {
      const result = filterTrails(mockTrails, easyDifficulty, [1000, 2000], true, 10);
      expect(result).toEqual([]);
    });
  });