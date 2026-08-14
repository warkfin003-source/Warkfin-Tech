// Populate the nationality list and reveal origin details only for Nigerian candidates.
const countryCodes = `AF AX AL DZ AS AD AO AI AQ AG AR AM AW AU AT AZ BS BH BD BB BY BE BZ BJ BM BT BO BQ BA BW BV BR IO BN BG BF BI CV KH CM CA KY CF TD CL CN CX CC CO KM CG CD CK CR HR CU CW CY CZ CI DK DJ DM DO EC EG SV GQ ER EE SZ ET FK FO FJ FI FR GF PF TF GA GM GE DE GH GI GR GL GD GP GU GT GG GN GW GY HT HM VA HN HK HU IS IN ID IR IQ IE IM IL IT JM JP JE JO KZ KE KI KP KR KW KG LA LV LB LS LR LY LI LT LU MO MG MW MY MV ML MT MH MQ MR MU YT MX FM MD MC MN ME MS MA MZ MM NA NR NP NL NC NZ NI NE NG NU NF MK MP NO OM PK PW PS PA PG PY PE PH PN PL PT PR QA RO RU RW RE BL SH KN LC MF PM VC WS SM ST SA SN RS SC SL SG SX SK SI SB SO ZA GS SS ES LK SD SR SJ SE CH SY TW TJ TZ TH TL TG TK TO TT TN TR TM TC TV UG UA AE GB US UM UY UZ VU VE VN VG VI WF EH YE ZM ZW`.split(' ');
const nigeriaStates = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT Abuja', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'];

const nationalitySelect = document.getElementById('nationality');
const nigeriaOriginFields = document.getElementById('nigeriaOriginFields');
const stateOfOrigin = document.getElementById('stateOfOrigin');
const lga = document.getElementById('lga');

if (nationalitySelect && nigeriaOriginFields && stateOfOrigin && lga) {
    const displayNames = new Intl.DisplayNames(['en'], { type: 'region' });
    countryCodes
        .map(code => ({ code, name: displayNames.of(code) }))
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(country => nationalitySelect.add(new Option(country.name, country.name)));

    nigeriaStates.forEach(state => stateOfOrigin.add(new Option(state, state)));

    nationalitySelect.addEventListener('change', () => {
        const isNigerian = nationalitySelect.value === 'Nigeria';
        nigeriaOriginFields.hidden = !isNigerian;
        stateOfOrigin.required = isNigerian;
        lga.required = isNigerian;
        if (!isNigerian) {
            stateOfOrigin.value = '';
            lga.value = '';
        }
    });
}
