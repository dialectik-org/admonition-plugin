import remarkCustomBlocks from './admonition.mjs'
import { IDialectikPlugin, IPluginProvider } from '@dialectik/plugin-interface';

const prismPlugin : IDialectikPlugin = {
  withMain: false,
  withComponents: true,
  remarkPlugins: [remarkCustomBlocks],
  isRequired: (content: string): boolean => {
    const pattern = /:::(info|note|tip|caution|danger)[\s\S]*?:::/;
    return pattern.test(content);
  },
  requires: ["default-plugin"]
}

export const PluginProvider : IPluginProvider = {
  getPlugin : () => {
    return prismPlugin
  }
}