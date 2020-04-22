import React, { useCallback, useMemo } from 'react';
import Text from '../../../Text';
import { Props } from './types';
import * as Style from './Cell.styled';
import { WithStyle } from '@medly-components/utils/src';



export const Cell: React.SFC<Props> & WithStyle = React.memo(props => {
    const {
            data,
            rowId,
            column,
            isRowClickDisabled,
        } = props
    const FormattedCell = useMemo(() => {
    const Component = column.component;
        return Component ? <Component {...{ data, rowId, disabled: isRowClickDisabled }} />
            : <Text>{data}</Text>
    }, [data, rowId, isRowClickDisabled, column]);


    return (
        <Style.CellContent variant="flat" flowDirection="vertical" alignItems="left" >
            {FormattedCell}
        </Style.CellContent>
    );
});
Cell.displayName = 'Cell';
