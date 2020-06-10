import { FontVariants, FontWeights } from '@medly-components/theme';
import { HTMLProps, WithThemeProp } from '@medly-components/utils';

export type LabelPositions = 'top' | 'right' | 'left' | 'bottom';

export interface Common extends HTMLProps<HTMLLabelElement>, WithThemeProp {
    /** Shows pointer while hovering on it
     * @default false
     */
    showPointer?: boolean;
    /** Label position
     * @default left
     */
    labelPosition?: LabelPositions;
    /** Shows red color asterisk
     * @default false
     */
    required?: boolean;
    /** Label Color */
    labelColor?: string;
}

export interface Props extends Common {
    /** Label Variant */
    labelVariant?: FontVariants;
    /** Label Weight */
    labelWeight?: FontWeights;
    /** Label Margin */
    labelSpacing?: string;
}
