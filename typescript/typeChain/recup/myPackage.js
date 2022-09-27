// @ts-check

// 기존 자바스크립트 프로잭트에 타입스크립트를 엊고 싶을 때

// 자바스크립트 파일에서 @ts-check 주석을 붙이면
// 해당 자바스크립트 파일도 타입을 검사함.

// 그전 tsconfig.json 에 "allowJs" : true

// JSDoc 읽어보길

// 요딴 식으로도 설명 가능

/**
 * Initialize Project
 * @param {Object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns  { boolean}
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}
