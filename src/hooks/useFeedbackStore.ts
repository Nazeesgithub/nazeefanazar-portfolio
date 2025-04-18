
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FeedbackMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

interface FeedbackState {
  feedback: FeedbackMessage[];
  addFeedback: (feedback: FeedbackMessage) => void;
  getFeedback: () => FeedbackMessage[];
  deleteFeedback: (id: string) => void;
}

export const useFeedbackStore = create<FeedbackState>()(
  persist(
    (set, get) => ({
      feedback: [],
      
      addFeedback: (newFeedback) => {
        set((state) => ({
          feedback: [...state.feedback, newFeedback]
        }));
      },
      
      getFeedback: () => {
        return get().feedback;
      },
      
      deleteFeedback: (id) => {
        set((state) => ({
          feedback: state.feedback.filter(item => item.id !== id)
        }));
      }
    }),
    {
      name: 'feedback-storage',
    }
  )
);
