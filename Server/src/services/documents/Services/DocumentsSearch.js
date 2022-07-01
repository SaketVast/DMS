let model;
module.exports = class GetDocuments {
  setup(app) {
    this.app = app;
    const mongooseClient = this.app.get("mongooseClient");
    model = mongooseClient.model("documents");
  }
  async find(params) {
    console.log(params.query);

    const records = await model.find({
      $where: function () {
        return this.docName == "sgf";
        for (var field in this.indexingInfo) {
          if (this.indexingInfo[field] == params.query.searchText) return true;
        }
        return false;
      },
    });
    // query
    console.log(records);
    return result;
  }
};
