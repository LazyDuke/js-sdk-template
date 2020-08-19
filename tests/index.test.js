import JsSdkTemplate from '@/src'

describe('JsSdkTemplate', () => {
  test('JsSdkTemplate namespace', () => {
    expect(JsSdkTemplate.namespace).toBe('__NAMESPACE__')
  })

  test('JsSdkTemplate version', () => {
    expect(JsSdkTemplate.version).toBe('__VERSION__')
  })

  test('jsSdkTemplate nullishCoalescingOperator', () => {
    const jsSdkTemplate = new JsSdkTemplate()

    expect(jsSdkTemplate.nullishCoalescingOperator()).toBe('nullish')
  })

  test('jsSdkTemplate optionalChain', () => {
    const jsSdkTemplate = new JsSdkTemplate()

    expect(jsSdkTemplate.optionalChain()).toBe(undefined)
  })

  test('jsSdkTemplate objectSpread', () => {
    const jsSdkTemplate = new JsSdkTemplate()

    expect(jsSdkTemplate.objectSpread()).toEqual({
      x: 1,
      y: 2,
      z: { a: 3, b: 4 }
    })
  })

  test('jsSdkTemplate arrowFunction', () => {
    const jsSdkTemplate = new JsSdkTemplate()

    expect(jsSdkTemplate.arrowFunction()).toBe('arrowFunction')
  })

  test('jsSdkTemplate asyncFunction', async () => {
    const jsSdkTemplate = new JsSdkTemplate()

    expect(await jsSdkTemplate.asyncFunction()).toBe('resolved')
  })

  test('jsSdkTemplate showPrivateName', () => {
    const jsSdkTemplate = new JsSdkTemplate()

    expect(jsSdkTemplate.showPrivateName()).toBe('js-sdk-template')
  })
})
