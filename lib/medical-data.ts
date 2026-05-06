export const medicalDocuments = [
  {
    id: "fever-001",
    title: "Fever",
    content: "Fever is a temporary increase in body temperature caused by infection. It's usually above 100.4°F (38°C). Fever is a sign that your body is fighting an infection. Most fevers are harmless and go away on their own. You can manage fever with rest, fluids, and over-the-counter medications like paracetamol or ibuprofen. Seek medical attention if fever persists beyond 3 days or reaches above 103°F (39.4°C)."
  },
  {
    id: "diabetes-001",
    title: "Diabetes",
    content: "Diabetes is a disease that affects blood sugar levels. There are two main types: Type 1 (autoimmune) and Type 2 (lifestyle-related). Symptoms include increased thirst, frequent urination, fatigue, and blurred vision. Type 1 requires insulin therapy. Type 2 can often be managed with diet, exercise, and medications. Regular blood sugar monitoring and a healthy lifestyle are essential for managing diabetes. Consult an endocrinologist for proper treatment."
  },
  {
    id: "headache-001",
    title: "Headache",
    content: "Headache is pain in the head due to stress, tension, or illness. Common types include tension headaches, migraines, and cluster headaches. Tension headaches feel like a tight band around the head. Migraines cause throbbing pain and sensitivity to light. Over-the-counter pain relievers like ibuprofen or acetaminophen can help. Stay hydrated, get adequate sleep, and manage stress. See a doctor if headaches are severe, frequent, or accompanied by other symptoms."
  },
  {
    id: "asthma-001",
    title: "Asthma",
    content: "Asthma is a condition in which airways become inflamed and narrow, making it difficult to breathe. Symptoms include shortness of breath, chest tightness, wheezing, and coughing, especially at night. Asthma can be triggered by allergens, exercise, cold air, or stress. Treatment includes inhaled medications (bronchodilators and corticosteroids) and avoiding triggers. An asthma action plan developed with your doctor is important. Seek emergency care if experiencing severe breathing difficulty."
  },
  {
    id: "hypertension-001",
    title: "Hypertension (High Blood Pressure)",
    content: "Hypertension is elevated blood pressure, typically defined as 130/80 mmHg or higher. It can lead to serious complications like heart disease and stroke if untreated. Often called 'silent killer' as it has no symptoms. Risk factors include obesity, salt intake, stress, and family history. Management includes lifestyle changes (diet, exercise, stress reduction) and medications (ACE inhibitors, beta-blockers). Regular blood pressure monitoring is crucial. Consult a cardiologist for proper management."
  },
  {
    id: "common-cold-001",
    title: "Common Cold",
    content: "The common cold is a viral infection affecting the upper respiratory tract. Symptoms include runny nose, sneezing, sore throat, and mild cough. Typically lasts 7-10 days. There's no cure for the cold; treatment is supportive - rest, fluids, and over-the-counter medications for symptom relief. Honey can soothe cough in adults and children over 1 year. Prevention includes frequent handwashing and avoiding contact with infected people. Antibiotics don't work on viral colds."
  },
  {
    id: "depression-001",
    title: "Depression",
    content: "Depression is a mental health condition characterized by persistent sadness, loss of interest in activities, and feelings of worthlessness. It can affect sleep, appetite, energy, and concentration. Depression is more than just feeling sad; it requires professional treatment. Treatment options include therapy (cognitive-behavioral therapy), medications (SSRIs), and lifestyle changes. Physical activity, social support, and sleep hygiene help. It's important to seek help from a mental health professional early. Depression is treatable and recovery is possible."
  },
  {
    id: "anxiety-001",
    title: "Anxiety Disorder",
    content: "Anxiety disorder is excessive worry and fear that interferes with daily life. Symptoms include racing heart, sweating, trembling, shortness of breath, and panic attacks. Types include generalized anxiety disorder, social anxiety, and panic disorder. Treatment includes cognitive-behavioral therapy, relaxation techniques, and medications. Regular exercise, meditation, and deep breathing help manage anxiety. Limit caffeine and alcohol intake. Professional help from a therapist or psychiatrist is recommended for proper diagnosis and treatment."
  },
  {
    id: "stroke-001",
    title: "Stroke",
    content: "A stroke occurs when blood flow to the brain is blocked, causing brain cells to die. Signs include sudden weakness, numbness, difficulty speaking, vision problems, and severe headache (remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency). Strokes are medical emergencies requiring immediate hospitalization. Risk factors include high blood pressure, high cholesterol, smoking, and diabetes. Prevention includes controlling blood pressure, managing diabetes, quitting smoking, and regular exercise. Time is critical - call emergency services immediately if symptoms appear."
  },
  {
    id: "covid-019-001",
    title: "COVID-19",
    content: "COVID-19 is an infectious disease caused by the SARS-CoV-2 virus. Symptoms include fever, cough, fatigue, loss of taste/smell, and difficulty breathing. Severity ranges from asymptomatic to severe respiratory distress. Vaccines are highly effective at preventing severe disease. Treatment is mostly supportive - rest, fluids, and oxygen if needed. High-risk groups include elderly, immunocompromised, and those with chronic conditions. Prevention includes vaccination, handwashing, and masking when appropriate. Consult a doctor if experiencing severe symptoms."
  }
];

export const SYSTEM_PROMPT = `You are a professional medical AI assistant.

Your task is to answer user medical questions accurately using the provided context only.

Rules:
1. Only use the given context to answer the question.
2. If the answer is not found in the context, say: "I don't have enough medical information to answer this."
3. Do not generate fake or assumed answers.
4. Keep answers clear, short, and medically accurate.
5. Use simple language understandable for patients.
6. If needed, suggest consulting a doctor.
7. Do NOT provide harmful or dangerous advice.

Context:
{context}

User Question:
{question}

Answer:`;
