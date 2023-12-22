
import { IApi } from 'umi';

import path from 'path';

const myStorePath = path.join(__dirname, './src/pages/util.ts');
const moduleName = 'antd';
const methodName = 'message';

export default (api: IApi) => {
  api.addBeforeBabelPlugins(() => {
    return {
      visitor: {
        ImportDeclaration(path) {
          const { specifiers, source } = path.node;

          if (source.value === moduleName) {
            const mapSpecifier = specifiers.find(specifier => specifier.local.name === methodName);

            if (mapSpecifier) {
              const newImportDeclaration = {
                ...path.node,
                specifiers: [mapSpecifier],
                source: {
                  ...path.node.source,
                  value: myStorePath,
                },
              };

              path.node.specifiers = path.node.specifiers.filter(specifier => specifier !== mapSpecifier);

              if (path.node.specifiers.length > 0) {
                path.insertAfter(newImportDeclaration);
              } else {
                path.replaceWith(newImportDeclaration);
              }
            }
          }
        },
      },
    };
  });
};
