export interface AffiliationInterface {
  afCode: string;
  afName: string;
  hiCode1: string;
  hiName1: string;
  hiCode2: string;
  hiName2: string;
  hiCode3: string;
  hiName3: string;
  hiCode4: string;
  hiName4: string;
  hiFlag4: boolean;
  hiCode5: string;
  hiName5: string;
  hiFlag5: boolean;
}

class AffiliationModel implements AffiliationInterface {
  public readonly afCode: string;
  public readonly afName: string;
  public readonly hiCode1: string;
  public readonly hiName1: string;
  public readonly hiCode2: string;
  public readonly hiName2: string;
  public readonly hiCode3: string;
  public readonly hiName3: string;
  public readonly hiCode4: string;
  public readonly hiName4: string;
  public hiFlag4: boolean;
  public readonly hiCode5: string;
  public readonly hiName5: string;
  public hiFlag5: boolean;

  constructor(res: Partial<AffiliationModel>) {
    this.afCode = res.afCode || "";
    this.afName = res.afName || "";
    this.hiCode1 = res.hiCode1 || "";
    this.hiName1 = res.hiName1 || "";
    this.hiCode2 = res.hiCode2 || "";
    this.hiName2 = res.hiName2 || "";
    this.hiCode3 = res.hiCode3 || "";
    this.hiName3 = res.hiName3 || "";
    this.hiCode4 = res.hiCode4 || "";
    this.hiName4 = res.hiName4 || "";
    this.hiFlag4 = res.hiFlag4 || false;
    this.hiCode5 = res.hiCode5 || "";
    this.hiName5 = res.hiName5 || "";
    this.hiFlag5 = res.hiFlag5 || false;
  }

  dig() {
    console.log(this.afCode + this.afName);
  }
}

export default AffiliationModel;
