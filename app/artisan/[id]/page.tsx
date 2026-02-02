"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useParams } from 'next/navigation';
import { MapPin, Phone, Briefcase, Star, MessageCircle, ArrowLeft, Globe } from 'lucide-react';
import Link from 'next/link';

export default function ArtisanProfilePage() {
  const { id } = useParams(); // Récupère l'ID dans l'URL
  const [artisan, setArtisan] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArtisan() {
      if (!id) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error("Artisan introuvable", error);
      } else {
        setArtisan(data);
      }
      setLoading(false);
    }
    getArtisan();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold">Chargement du profil...</div>;

  if (!artisan) return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Artisan introuvable</h1>
      <Link href="/" className="text-blue-600 underline">Retour à l'accueil</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header / Banner */}
      <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700"></div>

      <div className="max-w-4xl mx-auto px-4 -mt-16">
        <div className="bg-white rounded-[3rem] shadow-xl p-8 md:p-12 border border-slate-100">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-wider">
                {artisan.category || 'Artisan'}
              </span>
              <h1 className="text-4xl font-black text-slate-900 mt-4 mb-2">
                {artisan.business_name || artisan.full_name}
              </h1>
              <div className="flex items-center gap-4 text-slate-500 font-medium">
                <div className="flex items-center gap-1">
                  <MapPin size={18} className="text-blue-500" />
                  {artisan.city}
                </div>
                <span>•</span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={18} fill="currentColor" />
                  <span>Nouveau sur la plateforme</span>
                </div>
              </div>
            </div>

            {/* Bouton WhatsApp Flottant / CTA */}
            <a 
              href={`https://wa.me/${artisan.whatsapp_number}`}
              target="_blank"
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-lg shadow-green-100"
            >
              <MessageCircle size={24} />
              Contacter via WhatsApp
            </a>
          </div>

          <hr className="my-10 border-slate-100" />

          {/* Détails de l'artisan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-black mb-4">À propos</h2>
              <p className="text-slate-600 leading-relaxed">
                {artisan.full_name} est un professionnel spécialisé en **{artisan.category}** basé à **{artisan.city}**. 
                Engagé pour un travail de qualité dans l'Allier, cet artisan est disponible pour vos projets de rénovation ou dépannage.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-[2rem] space-y-4">
              <h3 className="font-bold text-slate-900 mb-2">Informations de contact</h3>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Phone size={18} className="text-blue-600" />
                </div>
                <span className="font-medium">+{artisan.whatsapp_number}</span>
              </div>
              {artisan.website && (
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Globe size={18} className="text-blue-600" />
                  </div>
                  <span className="font-medium">{artisan.website}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 mt-8 text-slate-500 font-bold hover:text-blue-600 transition-colors">
          <ArrowLeft size={18} /> Retour à la recherche
        </Link>
      </div>
    </div>
  );
}