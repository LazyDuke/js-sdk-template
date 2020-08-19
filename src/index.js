function Decorator(target) {
  target.decorated = true
}

@Decorator
class JsSdkTemplate {
  static namespace = '__NAMESPACE__'
  static version = '__VERSION__'

  #privateName = 'js-sdk-template'

  obj = {
    foo: {
      bar: {
        baz: 'baz'
      }
    }
  }

  nullishCoalescingOperator() {
    const nullish = this.nullish ?? 'nullish'
    console.log(nullish)
    return nullish
  }

  optionalChain() {
    console.log(this.obj?.qux?.baz)

    return this.obj?.qux?.baz
  }

  objectSpread() {
    const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
    console.log(x) // 1
    console.log(y) // 2
    console.log(z) // { a: 3, b: 4 }

    return { x, y, z }
  }

  arrowFunction = () => {
    const str = 'arrowFunction'
    console.log(str)
    return str
  }

  async asyncFunction() {
    const resolved = await new Promise(resolve => resolve('resolved'))
    console.log(resolved)

    return resolved
  }

  showPrivateName() {
    console.log(this.#privateName)
    return this.#privateName
  }
}

export default JsSdkTemplate
