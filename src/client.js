import { createClient } from '@supabase/supabase-js';

const URL = 'https://edujavcnmeoaqlatkdzx.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkdWphdmNubWVvYXFsYXRrZHp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5Nzg1MDksImV4cCI6MjA3ODU1NDUwOX0.n9UgRrDSG2O-9gl9g8zbBkXPzzfsOsboqnV5QaeJ-yo'

export const supabase = createClient(URL, API_KEY);