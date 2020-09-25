import IMailTemplateProvider from "../models/IMailTemplateProvider";

class FakeMailTemaplteProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail Content';
  }
}

export default FakeMailTemaplteProvider;
