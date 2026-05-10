export function buildImagePrompt(divinationText: string) {
  return `
[IMAGE PROMPT]

Create a cinematic symbolic portrait based on the following divination result.

MAIN SUBJECT:
A consistent symbolic human identity representing the querent. Semi-realistic, ethereal, emotionally reflective, same identity across all scenes.

SCENE:
Translate fortune result into metaphorical environment (light, fog, water, fracture, space, architecture).

ENERGY STATE:
Derived from the text: emotional flow, resistance, transformation, or stagnation.

STYLE:
Ultra-detailed cinematic realism, dreamlike East Asian mysticism, soft volumetric light, shallow depth of field, 8k, film still.

NEGATIVE:
no cartoon, no text, no literal fortune symbols, no tarot cards, no exaggerated fantasy armor.

INPUT:
${divinationText}
`;
}