"use client";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { customList } from './custom-list';
import { Compani } from '@/types/compani.types';
import { Contact } from '@/types/contact.types';
import { updateContactsOfCompany } from '../../actions';

function not(a: DateTypeListTransfer[], b: DateTypeListTransfer[]) {
  return a.filter((value) => !b.includes(value));
}

function intersection(a: DateTypeListTransfer[], b: DateTypeListTransfer[]) {
  return a.filter((value) => b.includes(value));
}

function union(a: DateTypeListTransfer[], b: DateTypeListTransfer[]) {
  return [...a, ...not(b, a)];
}
export type DateTypeListTransfer = Compani | Contact;
interface Props {
  // title: React.ReactNode;
  left: DateTypeListTransfer[],
  right: DateTypeListTransfer[]
  idCompany: number;
}

export default function ListTransfer({ left, right, idCompany }: Props) {
  const [checked, setChecked] = React.useState<DateTypeListTransfer[]>([]);
  // const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3]);
  // const [right, setRight] = React.useState<readonly number[]>([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: Compani | Contact) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: DateTypeListTransfer[]) =>
    intersection(checked, items).length;

  const handleCheckedRight = () => {
    updateContactsOfCompany({
      contactIds: leftChecked.map((item) => item.id),
      newCompanyId: null
    });
    setChecked([]);
  };

  const handleCheckedLeft =async () => {
      await updateContactsOfCompany({
        contactIds: rightChecked.map((item) => item.id),
        newCompanyId: idCompany
      });

  };



  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Grid>{customList({
        title: 'Asignados',
        items: left,
        numberOfChecked,
        handleToggle,
        checked
      })}</Grid>
      <Grid>
        <Grid container direction="column" sx={{ alignItems: 'center' }}>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid>{customList({
        title: 'Sin asignar',
        items: right,
        numberOfChecked,
        handleToggle,
        checked
      })}</Grid>
    </Grid>
  );
}
