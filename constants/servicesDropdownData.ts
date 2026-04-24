export interface ServiceItem {
    id: string;
    translationKey: string;
}

export interface ServiceCategory {
    id: string;
    titleKey: string;
    items: ServiceItem[];
}

export const servicesDropdownData: ServiceCategory[] = [
    {
        id: 'logistics',
        titleKey: 'services.cat_logistics',
        items: [
            { id: 'sea_freight', translationKey: 'services.svc_sea' },
            { id: 'reefer', translationKey: 'services.svc_reefer' },
            { id: 'trucking', translationKey: 'services.svc_trucking' },
            { id: 'air_freight', translationKey: 'services.svc_air' },
            { id: 'customs', translationKey: 'services.svc_customs' },
            { id: 'insurance', translationKey: 'services.svc_insurance' },
        ]
    },
    {
        id: 'export',
        titleKey: 'services.cat_export',
        items: [
            { id: 'rice', translationKey: 'services.svc_rice' },
            { id: 'coffee', translationKey: 'services.svc_coffee' },
            { id: 'fresh_fruit', translationKey: 'services.svc_fresh_fruit' },
            { id: 'frozen_fruit', translationKey: 'services.svc_frozen_fruit' },
            { id: 'dry_agro', translationKey: 'services.svc_dry_agro' },
        ]
    }
];
