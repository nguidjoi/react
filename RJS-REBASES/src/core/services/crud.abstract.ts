import { axios } from "@/bridges/axios";

import { CrudService, ENDPOINTS } from "../types/crud-service.type";
import * as Generics from "../types/generic.types";

/**
 * Classe abstraite fournissant une implémentation générique
 * des opérations CRUD (Create, Read, Update, Delete).
 *
 * @template T Type de l'entité manipulée, devant obligatoirement
 * posséder une propriété `id`.
 *
 * Cette classe centralise les appels HTTP via Axios et permet
 * de créer rapidement des services métiers spécialisés.
 */
export abstract class CrudAbstract<T extends Generics.WithUniqueId> implements CrudService<T>{

    /**
     * Endpoint API associé à la ressource.
     *
     * Doit être implémenté dans les classes enfants.
     */
    abstract API:ENDPOINTS;

    /**
     * Instance HTTP utilisée pour les requêtes réseau.
     */
    protected http = axios;

    /**
     * Crée une nouvelle ressource.
     *
     * @param item Données de la ressource à créer.
     * L'identifiant est exclu car généralement généré par le serveur.
     *
     * @returns Une promesse contenant la ressource créée.
     */
    create(item: Omit<T, "id">): Promise<T> {
        return this.http.post<T>(this.API, item).then(res => res.data);
    }

    /**
     * Récupère l'ensemble des ressources disponibles.
     *
     * @returns Une promesse contenant la liste des ressources.
     */
    read(): Promise<T[]>;

    /**
     * Récupère une ressource spécifique via son identifiant.
     *
     * @param id Identifiant unique de la ressource.
     *
     * @returns Une promesse contenant la ressource trouvée
     * ou `null` si aucune ressource ne correspond.
     */
    read(id: Generics.UniqueId): Promise<T | null>;

    /**
     * Implémentation générique de lecture.
     *
     * - Sans identifiant : retourne toutes les ressources.
     * - Avec identifiant : retourne une ressource spécifique.
     *
     * @param id Identifiant optionnel de la ressource.
     *
     * @returns Une promesse contenant soit :
     * - une ressource,
     * - une liste de ressources,
     * - ou `null`.
     */
    read(id?: Generics.UniqueId): Promise<T | T[] | null>{
        if(!id) return this.http.get<T[]>(this.API).then(res => res.data);
        return this.http.get<T>(`${this.API}/${id}`).then(res => res.data);
    }

    /**
     * Met à jour partiellement une ressource existante.
     *
     * @param target Ressource cible à modifier.
     * @param update Ensemble des propriétés à mettre à jour.
     *
     * @returns Une promesse contenant la ressource mise à jour.
     */
    update(target: T, update: Partial<Omit<T, "id">>): Promise<T> {
        return this.http.put<T>(`${this.API}/${target.id}`, update).then(res => res.data);
    }

    /**
     * Supprime une ressource existante.
     *
     * @param target Ressource à supprimer.
     *
     * @returns Une promesse contenant la ressource supprimée.
     */
    delete(target: T): Promise<T> {
        return this.http.delete<T>(`${this.API}/${target.id}`).then(res => res.data);
    }
}