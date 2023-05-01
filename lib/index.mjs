import remarkCustomBlocks from './admonition.mjs';
const prismPlugin = {
    remarkPlugins: [remarkCustomBlocks],
    react: { tagname: 'admonition', componentname: 'Admonition' },
    isRequired: (content) => {
        const pattern = /:::(info|note|tip|caution|danger)[\s\S]*?:::/;
        return pattern.test(content);
    }
};
export const PluginProvider = {
    getPlugin: () => {
        return prismPlugin;
    }
};
