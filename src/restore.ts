import * as core from '@actions/core'

function getInputAsArray(name: string, options?: core.InputOptions): string[] {
  return core
    .getInput(name, options)
    .split('\n')
    .map(s => s.trim())
    .filter(x => x !== '')
}

async function run(): Promise<void> {
  const rootKey = core.getInput('root-key')
  core.info(`root-key: [${rootKey}]`)

  const key = core.getInput('key').replace('ROOT_KEY_PLACEHOLDER', rootKey)
  core.info(`key: [${key}]`)

  const restoreKeys = getInputAsArray('restore-keys').map(value =>
    value.replace('ROOT_KEY_PLACEHOLDER', rootKey)
  )
  core.info(`restore-keys: ${restoreKeys}`)
}

run()

export default run
