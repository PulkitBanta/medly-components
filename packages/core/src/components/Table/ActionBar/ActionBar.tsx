import React, { useContext } from 'react';
import Text from '../../Text';
import { TablePropsContext } from '../TableProps.context';
import { ButtonSection, PopoverWrapper, PopupWrapper } from './ActionBar.styled';

export const ActionBar: React.FC = React.memo(() => {
    const { actions, selectedRowIds } = useContext(TablePropsContext);
    return (
        <PopoverWrapper>
            <PopupWrapper placement="top" withArrow={true}>
                <ButtonSection>{actions}</ButtonSection>
                <Text textVariant="body3">{`${selectedRowIds.length} Rows Selected`}</Text>
            </PopupWrapper>
        </PopoverWrapper>
    );
});