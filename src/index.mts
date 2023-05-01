import remarkCustomBlocks from './admonition.mjs'
import { IDialectikPlugin, IPluginProvider } from '@dialectik/plugin-interface';

const prismPlugin : IDialectikPlugin = {
  remarkPlugins: [remarkCustomBlocks],
  react: { tagname: 'admonition', componentname: 'Admonition' },
  isRequired: (content: string): boolean => {
    const pattern = /:::(info|note|tip|caution|danger)[\s\S]*?:::/;
    return pattern.test(content);
  }
}

export const PluginProvider : IPluginProvider = {
  getPlugin : () => {
    return prismPlugin
  }
}