// Sound Effects Manager
class SoundManager {
    constructor() {
        this.soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
        this.audioContext = null;
        this.masterGain = null;
    }

    initAudioContext() {
        if (this.audioContext) return;
        
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
            this.masterGain = this.audioContext.createGain();
            this.masterGain.connect(this.audioContext.destination);
            this.masterGain.gain.value = 0.3; // 30% volume
        } catch (e) {
            console.warn('Audio context not supported:', e);
        }
    }

    setSoundEnabled(enabled) {
        this.soundEnabled = enabled;
        localStorage.setItem('soundEnabled', enabled);
    }

    isSoundEnabled() {
        return this.soundEnabled;
    }

    // Play correct answer sound (ding)
    playCorrectSound() {
        if (!this.soundEnabled) return;
        
        this.initAudioContext();
        if (!this.audioContext) return;

        const now = this.audioContext.currentTime;
        const duration = 0.3;

        // Create oscillator for ding sound
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.connect(gain);
        gain.connect(this.masterGain);

        // Ding frequency (high pitch)
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(1000, now + 0.1);
        osc.frequency.exponentialRampToValueAtTime(600, now + duration);

        // Envelope
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

        osc.start(now);
        osc.stop(now + duration);
    }

    // Play wrong answer sound (buzz)
    playWrongSound() {
        if (!this.soundEnabled) return;
        
        this.initAudioContext();
        if (!this.audioContext) return;

        const now = this.audioContext.currentTime;
        const duration = 0.4;

        // Create oscillator for buzz sound
        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.connect(gain);
        gain.connect(this.masterGain);

        // Buzz frequency (low pitch)
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.linearRampToValueAtTime(150, now + duration);

        // Envelope
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

        osc.start(now);
        osc.stop(now + duration);
    }

    // Play combo sound (ascending tones)
    playComboSound(comboLevel) {
        if (!this.soundEnabled) return;
        
        this.initAudioContext();
        if (!this.audioContext) return;

        const now = this.audioContext.currentTime;
        const duration = 0.1;
        const baseFreq = 400 + (comboLevel * 50);

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + duration);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

        osc.start(now);
        osc.stop(now + duration);
    }

    // Play button click sound
    playClickSound() {
        if (!this.soundEnabled) return;
        
        this.initAudioContext();
        if (!this.audioContext) return;

        const now = this.audioContext.currentTime;
        const duration = 0.05;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(300, now + duration);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

        osc.start(now);
        osc.stop(now + duration);
    }

    // Play game start sound
    playStartSound() {
        if (!this.soundEnabled) return;
        
        this.initAudioContext();
        if (!this.audioContext) return;

        const now = this.audioContext.currentTime;
        const duration = 0.3;

        // Three ascending tones
        const frequencies = [400, 500, 600];
        frequencies.forEach((freq, index) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();

            osc.connect(gain);
            gain.connect(this.masterGain);

            const startTime = now + (index * 0.1);
            osc.frequency.setValueAtTime(freq, startTime);
            gain.gain.setValueAtTime(0.2, startTime);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.1);

            osc.start(startTime);
            osc.stop(startTime + 0.1);
        });
    }

    // Play game over sound
    playGameOverSound() {
        if (!this.soundEnabled) return;
        
        this.initAudioContext();
        if (!this.audioContext) return;

        const now = this.audioContext.currentTime;
        const duration = 0.5;

        // Descending tones
        const frequencies = [600, 500, 400];
        frequencies.forEach((freq, index) => {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();

            osc.connect(gain);
            gain.connect(this.masterGain);

            const startTime = now + (index * 0.15);
            osc.frequency.setValueAtTime(freq, startTime);
            gain.gain.setValueAtTime(0.2, startTime);
            gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.15);

            osc.start(startTime);
            osc.stop(startTime + 0.15);
        });
    }

    // Play notification sound
    playNotificationSound() {
        if (!this.soundEnabled) return;
        
        this.initAudioContext();
        if (!this.audioContext) return;

        const now = this.audioContext.currentTime;
        const duration = 0.2;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.frequency.setValueAtTime(700, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + duration);

        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

        osc.start(now);
        osc.stop(now + duration);
    }
}

const soundManager = new SoundManager();
