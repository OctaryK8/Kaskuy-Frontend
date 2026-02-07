"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import ThemeButton from "../widget/themeToggle";

type AuthMode = "login" | "register";

export default function AuthForm() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      <div className="w-full bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <div className="p-8">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
              {mode === "login" ? "Selamat Datang" : "Buat Akun Baru"}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 mb-8">
              {mode === "login"
                ? "Silakan masuk ke akun Anda"
                : "Daftar untuk memulai"}
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {mode === "register" && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Nama Lengkap
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white"
                        placeholder="Nama lengkap Anda"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Username
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                        <span className="text-sm font-bold">@</span>
                      </div>
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white"
                        placeholder="username"
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full pl-10 pr-12 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white"
                    placeholder={
                      mode === "login"
                        ? "Masukkan password"
                        : "Minimal 8 karakter"
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {mode === "register" && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Konfirmasi Password
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                        <Lock size={18} />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full pl-10 pr-12 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white"
                        placeholder="Ulangi password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      OTP Code
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                        <ShieldCheck size={18} />
                      </div>
                      <input
                        type="text"
                        className="w-full pl-10 pr-24 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-zinc-900 dark:text-white"
                        placeholder="Masukkan kode"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-1.5 right-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                      >
                        Kirim
                      </button>
                    </div>
                  </div>
                </>
              )}

              <div className="flex items-center justify-between py-1">
                <div className="flex items-center">
                  <input
                    id="checkbox"
                    type="checkbox"
                    checked={mode === "login" ? rememberMe : agreeTerms}
                    onChange={(e) =>
                      mode === "login"
                        ? setRememberMe(e.target.checked)
                        : setAgreeTerms(e.target.checked)
                    }
                    className="w-4 h-4 text-blue-600 bg-zinc-100 border-zinc-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600 cursor-pointer"
                  />
                  <label
                    htmlFor="checkbox"
                    className="ml-2 text-sm text-zinc-600 dark:text-zinc-400 cursor-pointer select-none"
                  >
                    {mode === "login" ? (
                      "Ingat saya"
                    ) : (
                      <span>
                        Saya menyetujui{" "}
                        <button
                          type="button"
                          className="text-blue-600 hover:underline"
                        >
                          syarat dan ketentuan
                        </button>{" "}
                        yang berlaku
                      </span>
                    )}
                  </label>
                </div>
                {mode === "login" && (
                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:underline transition-all"
                  >
                    Lupa password?
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 active:scale-[0.98] mt-4"
              >
                {mode === "login" ? "Masuk" : "Daftar"}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-zinc-600 dark:text-zinc-400">
                {mode === "login" ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
                <button
                  onClick={toggleMode}
                  className="text-blue-600 font-bold hover:underline transition-all"
                >
                  {mode === "login" ? "Daftar sekarang" : "Masuk sekarang"}
                </button>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Decorative footer element */}
        <div className="h-2 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600"></div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <ThemeButton />
      </div>
    </>
  );
}
