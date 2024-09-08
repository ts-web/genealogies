


// Artifacts
export const gen_5_12 = {
  id: 'gen_5_12',
  statement: 'Genesis 5:12 (ESV) says "When Kenan had lived 70 years, he fathered Mahalalel.',
};
export const gen_5_13 = {
  id: 'gen_5_13',
  statement: 'Genesis 5:13 (ESV) says "Kenan lived after he fathered Mahalalel 840 years and had other sons and daughters."',
};
export const gen_5_14 = {
  id: 'gen_5_14',
  statement: 'Genesis 5:14 (ESV) says "Thus all the days of Kenan were 910 years, and he died."',
};
export const gen_5_15 = {
  id: 'gen_5_15',
  statement: 'Genesis 5:15 (ESV) says "When Mahalalel had lived 65 years, he fathered Jared."',
};
export const gen_5_16 = {
  id: 'gen_5_16',
  statement: 'Genesis 5:16 (ESV) says "Mahalalel lived after he fathered Jared 830 years and had other sons and daughters."',
};
export const gen_5_17 = {
  id: 'gen_5_17',
  statement: 'Genesis 5:17 (ESV) says "Thus all the days of Mahalalel were 895 years, and he died."',
};

// Entities
export const p_kenan = {id: 'p_kenan', type: 'person'};
export const p_mahal = {id: 'p_mahal', type: 'person'};
export const p_jared = {id: 'p_jared', type: 'person'};

// Collections
// These allow for lists of things to be referenced in aggregate.
export const gen_genealogy = {
  id: 'gen_genealogy',
  desc: 'the verses of the passage of the genesis genealogies',
  refs: [
    'gen_5_12',
    'gen_5_13',
    'gen_5_14',
    'gen_5_15',
    'gen_5_16',
    'gen_5_17',
  ],
};
// TODO plot the Masoretic Text number and the Septugint

// Assumptions
export const gen_5_12_interpretation = {
  id: 'gen_5_12_kenan_fathered_mahal',
  assumption: '#gen_5_12 says that #p_mahal was born when #p_kenan was 70 years old.',
  deps: ['gen_5_12', 'gen_year_is_year'],
};
export const gen_5_13_interpretation = {
  id: 'gen_5_13_interpretation',
  assumption: '#gen_5_13 says that #p_kenan died 840 years after the birth of #p_mahal.',
  deps: ['gen_5_13', 'gen_year_is_year'],
};
export const gen_5_14_interpretation = {
  id: 'gen_5_14_interpretation',
  assumption: '#gen_5_14 says that #p_kenan died 910 years after his own birth.',
  deps: ['gen_5_14', 'gen_year_is_year'],
};
export const gen_5_15_interpretation = {
  id: 'gen_5_15_interpretation',
  assumption: '#gen_5_15 says that #p_jared was born when #p_mahal was 65 years old.',
  deps: ['gen_5_15', 'gen_year_is_year'],
};
export const gen_5_16_interpretation = {
  id: 'gen_5_16_interpretation',
  assumption: '#gen_5_16 says that #p_mahal died 830 years after the birth of #p_jared.',
  deps: ['gen_5_16', 'gen_year_is_year'],
};
export const gen_5_17_interpretation = {
  id: 'gen_5_17_interpretation',
  assumption: '#gen_5_17 says that #p_mahal died 895 years after his own birth.',
  deps: ['gen_5_17', 'gen_year_is_year'],
};

// felt true; might delete
export const a_illustration = {
  id: 'a_illustration',
  assumption: 'these statements are true',
  rationale: 'for the sake of illustration',
  refs: [
    'gen_genealogy',
  ],
};
export const gen_ref_kenan = {
  id: 'gen_ref_kenan',
  assumption: '#gen_genealogy refers to #p_kenan using the name "Kenan".',
  type: 'reference',
};
export const gen_ref_mahal = {
  id: 'gen_ref_mahal',
  assumption: '#gen_genealogy refers to #p_mahal using the name "Mahalalel".',
  type: 'reference',
};
export const gen_ref_jared = {
  id: 'gen_ref_jared',
  assumption: '#gen_genealogy refers to #p_jared using the name "Jared".',
  type: 'reference',
};
export const gen_year_is_year = {
  id: 'gen_year_is_year',
  assumption: 'The unit "year" that #gen_genealogy refers to is the same as our current concept of "year".',
};
export const gen_year_is_month = {
  id: 'gen_year_is_month',
  assumption: 'The unit "year" that #gen_genealogy refers to is the same as our current "month".',
};
export const time_constant = {
  id: 'time_constant',
  assumption: 'At the time described by #gen_genealogy, time elapsed at the same rate as now. A year and a month were the same amount of time as they are now.',
};
export const humans_same = {
  id: 'humans_same',
  assumption: 'At the time described by #gen_genealogy, humans were biologically the same as they are now in terms of their reproductive age of fertility.',
};
export const gen_begat_literal = {
  id: 'gen_begat_literal',
  assumption: 'The "fathering" or "begetting" (as in "begat") described by #gen_genealogy refers to literal reproduction i.e. having a biological child or biological ancestor. It does _not_ refer to _metaphorical_ fathering such as becoming a father to a non-biological child.',
  // TODO explore the alternative to #gen_begat_literal.
};
// TODO account for genesis numbers being rounded to the most significant digit.
// TODO account for genesis numbers being base 12 (or something like that -- https://www.reddit.com/r/AskHistorians/comments/412z1w/biblical_historians_why_are_the_lifespans_of/).
// TODO account for genesis numbers being 10x.
export const kenan_fathered_mahal = {
  id: 'kenan_fathered_mahal',
  assumption: 'that #p_kenan was the biological father of #p_mahal',
};
export const mahal_fathered_jared = {
  id: 'mahal_fathered_jared',
  assumption: 'that #p_mahal was the biological father of #p_jared',
};
export const current_male_fertility_age = {
  id: 'current_male_fertility_age',
  assumption: 'Present day human males become viable for fertility at puberty which starts at age 9-14. Before 9 years old, a male cannot become a father.',
};
export const current_human_gestation_period_40wk = {
  id: 'current_human_gestation_period_40wk',
  assumption: 'Present day humans gestate for an average of 40 weeks.',
};
export const current_human_min_gestation_period_20wk = {
  id: 'current_human_min_gestation_period_20wk',
  assumption: 'Present day humans do not survive if born before 20 weeks of gestation.',
  // TODO represent probabilities: bell curve / gaussian distribution.
};
export const gen_min_fathering_age_9y_20wk = {
  id: 'gen_min_fathering_age_9y_20wk',
  assumption: 'The fathers in #gen_genealogy did not become fathers before 9 years and 20 months of age.',
};
// TODO add a way to assert the default assumed age of fatherhood.
export const gen_fathering_was_birth = {
  id: 'gen_fathering_was_birth',
  assumption: 'In #gen_genealogy, the "fathering" event referred to the birth of the child, not the insemination of the mother.',
};
export const gen_birth_40wk_after_insemination = {
  id: 'gen_birth_40wk_after_insemination',
  assumption: 'In #gen_genealogy, childbirth occurs typically 40 weeks after insemination of the mother, but may occur in as little as 20 weeks.',
};
export const gen_insemination_delay = {
  id: 'gen_insemination_delay',
  assumption: 'In #gen_genealogy, after sex, insemination may be delayed by up to a week.',
};



// Time points
// TODO these could just be strings manifested by their references.
export const t_kenan_birth = {id: 't_kenan_birth', desc: 'The birth of #p_kenan'};
export const t_kenan_death = {id: 't_kenan_death', desc: 'The death of #p_kenan'};
export const t_mahal_birth = {id: 't_mahal_birth', desc: 'The birth of #p_mahal'};
export const t_mahal_death = {id: 't_mahal_death', desc: 'The death of #p_mahal'};
export const t_jared_birth = {id: 't_jared_birth', desc: 'The birth of #p_jared'};
export const t_jared_death = {id: 't_jared_death', desc: 'The death of #p_jared'};
export const dur_min_gestation_time = {
  id: 'dur_min_gestation_time',
  duration: '20 weeks',
  deps: ['gen_birth_40wk_after_insemination'],
};
export const dur_min_male_fertility_age = {
  id: 'dur_min_male_fertility_age',
  duration: '9 years',
  deps: ['gen_min_fathering_age_9y_20wk'],
};
export const dur_min_fathering_age = {
  id: 'dur_min_fathering_age',
  duration: 'dur_min_male_fertility_age + dur_min_gestation_time',
  // TODO explain this, even though it should be obvious.
};
export const dur_max_insemination_delay = {
  id: 'dur_max_insemination_delay',
  duration: '1 week',
  deps: ['gen_insemination_delay'],
};
export const dur_max_gestation_time = {
  id: 'dur_max_gestation_time',
  duration: '60 weeks',
  deps: [/* idk */],
};

// Constraints
export const t_mahal_birth_after_kenan_birth = {
  point: 't_mahal_birth',
  rel: 'not before',
  reference: 't_kenan_birth + dur_min_gestation_time',
  deps: ['kenan_fathered_mahal'],
};
export const t_mahal_birth_after_kenan_fertility = {
  point: 't_mahal_birth',
  rel: 'not before',
  reference: 't_kenan_birth + dur_min_fathering_age', // Using variables inherits their deps.
  deps: ['kenan_fathered_mahal'],
};
export const t_mahal_birth_before_kenan_death = {
  point: 't_mahal_birth_before_kenan_death',
  rel: 'not after',
  // Assuming he had sex then immediately died, and then the sperm lasted the max time before inseminating an egg, and then the baby was carried for the longest possible time before being born. So the latest the offspring could have been born is the father's death + max insemination time + max gestation time.
  reference: 't_kenan_death + dur_max_insemination_delay + dur_max_gestation_time',
  deps: ['kenan_fathered_mahal'],
};
export const t_mahal_birth_after_kenan_70 = {
  point: 't_mahal_birth',
  rel: 'not before',
  reference: 't_kenan_birth + 70 years', // TODO support using user-defined duration units like gen_5_years, and including the definition of gen_5_year in the deps.
  error: '1 year',
  deps: ['gen_5_12_interpretation', 'gen_year_is_year'],
};
export const kenan_lived_840_after_mahal_birth = {
  point: 't_kenan_death',
  rel: 'not before',
  reference: 't_mahal_birth + 840 years',
  deps: ['gen_5_13_interpretation'],
};
// TODO add constraint: kenan's death occurs after his birth.
// TODO constraints can be expressed two ways: if Y is after X, then X is before Y.

export const kenan_lifespan_910 = {
  point: 't_kenan_death',
  rel: 'not before',
  reference: 't_kenan_birth + 910 years',
  deps: ['gen_5_14_interpretation'],
};

// Logic deductions

export const l_year_or_month = {
  id: 'l_year_or_month',
  type: 'exclusion',
  items: [
    'gen_year_is_year',
    'gen_year_is_month',
  ],
  rationale: 'The "year" duration in #gen_genealogy cannot both be a year and a month.',
};
// These are sort of irrelevant but are valid deductions nonetheless.
export const kenan_not_mahal = {
  id: 'kenan_not_mahal',
  assumption: 'Given #gen_genealogy and #gen_ref_kenan and #gen_ref_mahal, then #p_kenan and #p_mahal are different people.',
};
export const mahal_not_jared = {
  id: 'mahal_not_jared',
  assumption: 'Given #gen_genealogy and #gen_ref_mahal and #gen_ref_jared, then #p_mahal and #p_jared are different people.',
};
export const kenan_not_jared = {
  id: 'kenan_not_jared',
  assumption: 'Given #gen_genealogy and #gen_ref_kenan and #gen_ref_jared, then #p_kenan and #p_jared are different people.',
};
export const gen_kenan_fathered_mahal = {
  id: 'gen_kenan_fathered_mahal',
  given: ['gen_5_12_kenan_fathered_mahal'],
  then: ['kenan_fathered_mahal'],
};
export const logic_gen_min_fathering_age_9y_20wk = {
  id: 'logic_gen_min_fathering_age_9y_20wk',
  given: ['current_male_fertility_age', 'current_human_gestation_period_40wk', 'humans_same'],
  then: ['gen_min_fathering_age_9y_20wk'],
};
// Some things are perhaps not worth enumerating: if a man fathered a child, then that man must have been born, and must have lived until the age of fertility.


// TODO make a UI for this data entry.
