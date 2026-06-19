window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();
var accessRevoked = player.GetVar("isAccessRevoked");
var tone         = player.GetVar("conversationTone");
var hardware     = player.GetVar("hardwareSecured");
var risk         = player.GetVar("riskScore");
var riskLevel, riskLabel;
if (risk === 0) {
 riskLevel = "LOW";        riskLabel = "Clean Execution";
} else if (risk <= 20) {
 riskLevel = "MODERATE";   riskLabel = "Manageable Exposure";
} else if (risk <= 40) {
 riskLevel = "HIGH";       riskLabel = "Significant Exposure";
} else {
 riskLevel = "CRITICAL";   riskLabel = "Immediate Review Required";
}
var exposure = 0;
if (!accessRevoked) exposure += 990000;
if (tone === 1)     exposure += 60000;
if (tone === 2)     exposure += 180000;
if (!hardware)      exposure += 75000;
player.SetVar("AuditRiskLevel",  riskLevel);
player.SetVar("AuditRiskLabel",  riskLabel);
player.SetVar("AuditExposure",   "$" + exposure.toLocaleString());
player.SetVar("AuditD1Status",   accessRevoked ? "PASS" : "RISK");
player.SetVar("AuditD1Detail",   accessRevoked
 ? "Access revoked before the meeting. Exfiltration window closed."
 : "Email warning sent — access window remained open through the meeting.");
player.SetVar("AuditD2Status",   tone === 0 ? "PASS" : "RISK");
player.SetVar("AuditD2Detail",   tone === 0
 ? "Compliant framing used. Severance agreement signed."
 : "Ambiguous framing. No severance signed. Attorney follow-up expected.");
player.SetVar("AuditD3Status",   hardware ? "PASS" : "RISK");
player.SetVar("AuditD3Detail",   hardware
 ? "Hardware collected on-site. Forensic hold initiated."
 : "Hardware released. Chain of custody broken. Forensic evidence inadmissible.");

}

};
