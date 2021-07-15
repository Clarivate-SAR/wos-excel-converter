module.exports = {
  transpileDependencies: ["vuetify", "vuex-module-decorators"],
  configureWebpack: {
    target: "electron-renderer"
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.clarivate.wos-excel-converter",
        productName: "WOS API Excel Converter",
        copyright: "Copyright © 2021 Clarivate Analytics",
        publish: ["github"],
        linux: {
          target: ["AppImage", "tar.gz"]
        }
      },
      externals: ["exceljs"],
      nodeIntegration: true
    }
  }
};
