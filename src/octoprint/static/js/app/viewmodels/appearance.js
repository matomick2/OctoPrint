$(function() {
    function AppearanceViewModel(parameters) {
        var self = this;

        self.name = parameters[0].appearance_name;
        self.color = parameters[0].appearance_color;
        self.colorTransparent = parameters[0].appearance_colorTransparent;

        self.brand = ko.pureComputed(function() {
            if (self.name())
                return self.name();
            else
                return gettext("OctoPrint");
        });

        self.fullbrand = ko.pureComputed(function() {
            if (self.name())
                return gettext("Bicephale") + ": " + self.name();
            else
                return gettext("Bicephale");
        });

        self.title = ko.pureComputed(function() {
            if (self.name())
                return self.name() + " [" + gettext("Bicephale") + "]";
            else
                return gettext("Bicephale");
        });
    }

    OCTOPRINT_VIEWMODELS.push([
        AppearanceViewModel,
        ["settingsViewModel"],
        "head"
    ]);
});
