import Page from "./Page";
import TabSection from "./sections/TabSection";

class HomePage extends Page {
  private _tabSection: TabSection = new TabSection();

  public get tabSection(): TabSection {
    return this._tabSection;
  }
}

export default HomePage;
