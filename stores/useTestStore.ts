export const useTestStore = defineStore('test-store', () => {
  const testVar = ref('this is merely a test!');

  return { testVar };
});
