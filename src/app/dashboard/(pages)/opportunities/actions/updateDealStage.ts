'use server';

import { myFetch } from '@/common/my-fetch';
import { API } from '@/consts/api';
import { cookies } from 'next/headers';
import { Deal, UpdateDealPayload } from '@/types/opportunity.types';

export async function updateDealStage(
  dealId: number,
  stage: string,
  lossReasonId?: number,
  lossReasonNote?: string
): Promise<Deal | null> {
  try {
    const token = (await cookies()).get('access_token')?.value;
    if (!token) throw new Error('No token found');

    const payload: UpdateDealPayload = { stage };
    if (lossReasonId) payload.lossReasonId = lossReasonId;
    if (lossReasonNote) payload.lossReasonNote = lossReasonNote;

    const response = await myFetch<Deal>(
      `${API.DEAL.UPDATE}/${dealId}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    console.log("UPDATED DEAL", response.data?.data);
    return response.data?.data || null;
  } catch (err) {
    console.error('Error updating deal stage:', err);
    return null;
  }
}
