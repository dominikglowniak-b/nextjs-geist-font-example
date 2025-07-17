"use client"

import WaterNotificationSettings from "@/components/WaterNotificationSettings"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">Ustawienia</h1>
        <p className="text-gray-600 mt-2">
          Personalizuj swoją aplikację treningową
        </p>
      </div>

      <div className="max-w-2xl">
        <WaterNotificationSettings />
      </div>

      <div className="bg-gray-50 rounded-lg p-6 max-w-2xl">
        <h2 className="text-lg font-semibold text-black mb-4">
          Informacje o aplikacji
        </h2>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Wersja aplikacji:</span>
            <span className="font-medium">1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span>Ostatnia aktualizacja:</span>
            <span className="font-medium">Grudzień 2024</span>
          </div>
          <div className="flex justify-between">
            <span>Dane przechowywane:</span>
            <span className="font-medium">Lokalnie w przeglądarce</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl">
        <h3 className="font-semibold text-black mb-2">Wskazówki</h3>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>• Regularne nawodnienie poprawia wydajność treningową</li>
          <li>• Zapisuj swoje postępy po każdym treningu</li>
          <li>• Planuj treningi z wyprzedzeniem w kalendarzu</li>
          <li>• Używaj trybu treningu na żywo dla lepszego śledzenia</li>
        </ul>
      </div>
    </div>
  )
}
