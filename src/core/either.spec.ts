import { Either, Left, Right, left, right } from './either'

function doSomething(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(50)
  }

  return left('error')
}

describe('Either', () => {
  it.only('should success', () => {
    const result = doSomething(true)

    expect(result).toBeInstanceOf(Right)
    expect(result.isRight()).toBe(true)
    expect(result.isLeft()).toBe(false)
  })
  it('should fail', () => {})
})
