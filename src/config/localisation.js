import LocalizedStrings from 'react-localization';

let localeString = new LocalizedStrings({
    en:{
        manage:"Manage Campaign",
      live:"Live Campaign ",
      upcoming:"Upcoming Campaign",
        past: "Past Campaign",
        date: 'Date',
        view: 'View',
        actions: 'Actions',
        campaign: 'Campaign',
        viewPricing: 'View Pricing',
        report: 'report',
      schedule:'Schedule Campaign'
    },
    ge: {
      manage:"Kampagne verwalten",
      live:"Live-Kampagne",
      upcoming:"bevorstehende Kampagne",
        past: "vergangene Kampagne",
        date: 'Datum',
        view: 'Aussicht',
        actions: 'Aktionen',
        campaign: 'Kampagne',
        viewPricing: 'Preise anzeigen',
        report: 'Bericht',
      schedule:'Kampagne planen'
    }
});
export { localeString };

