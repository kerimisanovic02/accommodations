export class BaseModel {
    constructor(attributes?: any) {
        if (attributes) {
            this.setAttributes(attributes)
        }
    }

    public setAttributes(attributes: any) {
        Object.assign(this, attributes);
        return this;
    }
}
