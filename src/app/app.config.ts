/*
* LiveSwitch Cloud Configuration can be found inside the LiveSwitch Cloud Dashboard under the Application menu. Click to open your application and view the values across the top.
*/
export class Config 
{
    // Global Variables
    public gatewayURL: string = "https://cloud.liveswitch.io/";
    public applicationId: string  = "";
    public sharedSecret: string = "";

    // Local Variables
    public userId: string = "";
    public deviceId: string = "";
}